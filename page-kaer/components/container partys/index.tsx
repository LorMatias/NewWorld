"use client";
import { PartyList } from "../partys";
import { useState } from "react";

const initialParties = [
  {
    title: "G1",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G2",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G3",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G4",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G5",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G6",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G7",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G8",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G9",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
  {
    title: "G10",
    members: [
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
      { role: "", class: "", heartrune: "", name: "" },
    ],
  },
];

const roles = ["Bruiser", "Tank", "Support", "Healer", "DPS", "Disruptor"];
const classes = [
  "GA/WH",
  "SNS/Spear",
  "SNS/Hatchet",
  "SNS/Scorpio",
  "LS/hatchet",
  "LF/Rapier",
  "LS/Void",
  "IG/VG",
  "Bow/Rapier",
  "Bow/Hatchet",
  "IG/Flail",
];
const heartrunes = ["Stoneform", "Explo", "Vines", "Vomito"];
const names = ["Player1", "Player2", "Player3", "Player4", "Player5"];

export const Parties = () => {
  const [parties, setParties] = useState(initialParties);

  const handleUpdateMember = (
    partyIndex: number,
    memberIndex: number,
    key: keyof (typeof parties)[0]["members"][0],
    value: string
  ) => {
    const updatedParties = [...parties];
    updatedParties[partyIndex].members[memberIndex][key] = value;
    setParties(updatedParties);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {parties.map((party, partyIndex) => (
        <PartyList
          key={partyIndex}
          title={party.title}
          members={party.members}
          roles={roles}
          classes={classes}
          heartrunes={heartrunes}
          names={names}
          onUpdateMember={(memberIndex, key, value) =>
            handleUpdateMember(partyIndex, memberIndex, key, value)
          }
        />
      ))}
    </div>
  );
};
