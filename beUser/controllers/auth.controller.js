import { auth, db } from "../firebase/firebase.config.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref, set, get } from "firebase/database";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = user;

    const userRef = ref(db, "users/" + uid);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "User not found" });
    }

    const userdata = snapshot.val();
    const { role, ...userDataRes } = userdata;

    res.json({ user: { uid, ...userDataRes } });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = userCredential;

    const userData = {
      email: user.email,
      displayName: displayName || "Anonymous",
      photoURL: "",
      balance: 0.0,
      accountStatus: "active",
      createdAt: new Date().toISOString(),
      role: "user",
      containerCount: 0,
      lastContainerUpdate: new Date().toISOString(),
    };

    await set(ref(db, `users/${user.uid}`), userData);

    const { role, ...userDataRes } = userData;

    res.status(201).json({
      user: { userId: user.uid, ...userDataRes },
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    await signOut(auth);
    res.status(204).json({ message: "logout successful" });
  } catch (error) {}
};

export { login, signup, logout };
