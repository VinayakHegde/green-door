'use client'
import { use, useEffect, useState } from "react";
import { Stage1 } from "./stage-1";
import { Stage2 } from "./stage-2";
import { Stage3 } from "./stage-3";
import { Stage4 } from "./stage-4";
import { useForm } from "@/hooks";

export const MasterForm = (props: MasterFormProps) => {
  const { localState, setState, onSubmit } = useForm(props)
  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-between flex-1 w-1/2 bg-white p-4">
      <Stage1 state={localState} onChange={setState} />
      <Stage2 state={localState} onChange={setState} />
      <Stage3 state={localState} onChange={setState} />
      <Stage4 state={localState} onChange={setState} />
    </form>
  );
}

