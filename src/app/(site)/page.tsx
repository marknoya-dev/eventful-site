/* eslint-disable react/no-unescaped-entities */
"use client";
import { TextField, Button } from "@eventful-ph/stark";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJ5yXbu95iZZiplnlu73R_Tz8LFFLZF24",
  authDomain: "eventful-web-leads.firebaseapp.com",
  projectId: "eventful-web-leads",
  storageBucket: "eventful-web-leads.appspot.com",
  messagingSenderId: "157481420022",
  appId: "1:157481420022:web:94dcc448eadc873ae198d7",
  measurementId: "G-3JW9B3C680",
  databaseURL:
    "https://eventful-web-leads-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default function Page() {
  const [fieldValue, setFieldValue] = useState<string>("");
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const name = event.target.name.value;
    SendData(name, email);
    setSubmitted(true);
  };

  const SendData = async (name: string, email: string) => {
    const db = getDatabase();
    set(ref(db, "vendors/" + name), {
      email: email,
    });
  };

  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center pt-[80px] sm:pt-40px">
        <div className="flex flex-col gap-24px justify-center items-center">
          <Image
            src={"/logowithtag.png"}
            alt="Eventful Logo"
            width={300}
            height={150}
          />

          <div className="border border-outline-default rounded-8px bg-white shadow-sm w-fit mx-8px">
            <div className="p-24px flex flex-col gap-16px">
              <div>
                <h3 className="text-h6 font-bold">Be an Eventful Vendor!</h3>
                <p className="text-caption text-copy-caption mt-4px">
                  {/* // eslint-disable-next-line react/no-unescaped-entities */}
                  Let you clients find you and join the Philippines' largest
                  online vendor marketplace
                </p>
              </div>
              {!isSubmitted ? (
                <form onSubmit={submitHandler}>
                  <div className="flex gap-8px flex-col sm:flex-row  sm:align-bottom sm:items-end">
                    <TextField
                      name="name"
                      onChange={() => {}}
                      value={fieldValue}
                      id="email-field"
                      label="Your Name"
                    />

                    <TextField
                      name="email"
                      onChange={() => {}}
                      value={fieldValue}
                      id="email-field"
                      label="Your Email"
                      type="email"
                    />

                    <Button
                      submit
                      label="Submit"
                      variant="solid"
                      color="primary"
                    />
                  </div>
                </form>
              ) : (
                <p className="py-[24px] text-copy-caption">
                  Thank you for your interest!{" "}
                  <span className="block">
                    We'll reach out to you soon. Have an eventful day!
                  </span>
                </p>
              )}
            </div>
            <div className="text-body text-black flex flex-col sm:flex-row gap-2px items-left px-24px py-16px border-t border-outline-default">
              <span className="font-bold">
                Do you have questions? Reach out to
              </span>
              <span></span>
              <span>marknoya@eventful.ph</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
