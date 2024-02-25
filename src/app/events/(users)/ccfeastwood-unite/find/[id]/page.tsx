"use client";
import { useEffect, useState, Suspense } from "react";
import { useGuestsContext } from "../../GuestsContext";
import { Button } from "@eventful-ph/stark";
import { useRouter } from "next/navigation";
import { motion, useAnimate, stagger } from "framer-motion";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { getGroup, getRoom } = useGuestsContext();
  const [scope, animate] = useAnimate();
  const [groupData, setCurrGroup] = useState(getGroup(params.id));

  const guest = groupData.guest;

  const [roomData, setCurrRoom] = useState(
    getRoom(guest ? guest.fullName : "")
  );
  const onClickHandler = () => {
    router.replace("/events/refresh-true-life/find");
  };

  const goToList = () => {
    router.replace("/events/refresh-true-life/guests");
  };

  useEffect(() => {
    if (guest === undefined) {
      router.replace("/events/refresh-true-life/find");
    } else {
      animate(
        ".div-animated",
        { opacity: 1, y: -20 },
        { delay: stagger(0.1, { startDelay: 0.15 }), ease: "easeInOut" }
      );
    }

    const groupNumber = guest && guest.groupID;
  }, [animate, router, guest]);

  return (
    <div
      ref={scope}
      className="max-h-screen overflow-scroll flex flex-col gap-8px justify-self-start justify-start align-top item pt-[20vh]  no-scrollbar"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="div-animated text-center flex flex-col justify-center align-center items-center"
      >
        <span className="jost font-bold tracking-wide text-copy-caption sm:text-[1.2em] ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hello, {guest && guest.fullName.split(" ")[0]}!
        </span>

        {groupData.members.length != 0 ? (
          <h3 className="kaiseki text-black">
            <p className="font-bold text-primary-base text-h4 sm:text-h3">
              Your group is
            </p>
            <p className="text-[60px] leading-[80px] mt-8px">
              {guest && guest.groupID}
            </p>
          </h3>
        ) : (
          <div className="text-copy-caption">
            You are not assigned to a breakout group
          </div>
        )}
      </motion.div>

      {groupData.members.length != 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="div-animated flex flex-col align-center justify-center items-center"
        >
          <h2 className="kaiseki font-bold text-copy-caption text-[20px] mt-16px mb-8px">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Your group members are:
          </h2>
          <ul className="text-center font-[32px] leading-[24px] mb-4px text-copy-caption">
            {groupData.members.map((currGuest, i) => {
              if (guest && guest.fullName !== currGuest.fullName)
                return <li key={i}>{currGuest.fullName}</li>;
            })}
          </ul>
        </motion.div>
      ) : (
        ""
      )}

      <hr></hr>

      {roomData.guests.length != 0 ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className="div-animated text-center flex flex-col justify-center align-center items-center mt-40px"
          >
            <h3 className="kaiseki text-black">
              <p className="font-bold text-primary-base text-h4 sm:text-h3">
                Your room is
              </p>
              <p className="text-[60px] leading-[80px] mt-8px">
                {guest && guest.roomID}
              </p>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="div-animated flex flex-col align-center justify-center items-center"
          >
            <h2 className="kaiseki font-bold text-copy-caption text-[20px] mt-16px mb-8px">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Your are with:
            </h2>
            <ul className="text-center font-[32px] leading-[24px] mb-4px text-copy-caption">
              {roomData.guests.map((currGuest, i) => {
                console.log(currGuest);
                if (guest && guest.fullName !== currGuest.fullName)
                  return <li key={i}>{currGuest.fullName}</li>;
              })}
            </ul>
          </motion.div>
        </>
      ) : (
        <div className="flex flex-col justify-center align-center items-center gap-8px mt-40px">
          <div className="text-copy-caption text-h6 font-bold align-center">
            No room assignment found.
          </div>
          <div className="text-copy-caption text-caption">
            There seems to be a problem, please reach out to the event
            organizer.
          </div>
          <Button
            className="self-center div-animted mb-[90px]"
            label="Check your name on the list"
            onClick={goToList}
            color="primary"
            variant="text"
          />
        </div>
      )}

      <Button
        className="self-center div-animted mb-[90px]"
        label="Search for another name"
        onClick={onClickHandler}
        color="primary"
      />
    </div>
  );
}
