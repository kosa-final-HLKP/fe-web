import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { LiaPoopSolid } from "react-icons/lia";
import { LuMilk } from "react-icons/lu";
import styled from "./page.module.css";
import Calendar from "@/components/Calendar";
import WeeklyGraph from "@/components/WeeklyGraph";

export default function page() {
  const rhythmData = [
    {
      id: 1,
      title: "수면 시간",
      data: [
        {
          name: "13",
          pv: 8,
        },
        {
          name: "14",
          pv: 6,
        },
        {
          name: "15",
          pv: 12,
        },
        {
          name: "16",
          pv: 14,
        },
        {
          name: "17",
          pv: 16,
        },
        {
          name: "18",
          pv: 8,
        },
        {
          name: "19",
          pv: 12,
        },
      ],
      color: "#FF9F39",
    },
    {
      id: 2,
      title: "배변 횟수",
      data: [
        {
          name: "2",
          pv: 8,
        },
        {
          name: "3",
          pv: 6,
        },
        {
          name: "1",
          pv: 12,
        },
        {
          name: "2",
          pv: 14,
        },
        {
          name: "3",
          pv: 16,
        },
        {
          name: "18",
          pv: 8,
        },
        {
          name: "4",
          pv: 12,
        },
      ],
      color: "#FF9F39",
    },
    {
      id: 3,
      title: "분유양",
      data: [
        {
          name: "2",
          pv: 100,
        },
        {
          name: "3",
          pv: 110,
        },
        {
          name: "1",
          pv: 90,
        },
        {
          name: "2",
          pv: 110,
        },
        {
          name: "3",
          pv: 150,
        },
        {
          name: "18",
          pv: 120,
        },
        {
          name: "4",
          pv: 140,
        },
      ],
      color: "#FEA5B8",
    },
  ];
  return (
    <div>
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.card}>
            <GiNightSleep size={60} />
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              오늘의 수면시간
            </p>
            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              08:12
            </h5>
          </div>
          <div className={styled.card}>
            <LiaPoopSolid size={60} />
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              오늘의 배변횟수
            </p>
            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              3회
            </h5>
          </div>
          <div className={styled.card}>
            <LuMilk size={60} />
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              오늘의 분유양
            </p>
            <h5 className="mb-2 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              60ml
            </h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {rhythmData.map((rhythm) => (
          <WeeklyGraph
            key={rhythm.id}
            data={rhythm.data}
            color={rhythm.color}
            title={rhythm.title}
          />
        ))}
      </div>
      <Calendar />
    </div>
  );
}
