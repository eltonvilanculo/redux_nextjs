"use client";
import {
  descrement,
  increment,
  incrementAsync,
  incrementbyStep,
} from "@/app/state/counter/counterSlice";
import { AppDispatch, RootState } from "@/app/state/state";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default function Counter({}: Props) {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {" "}
      <h2>{count.value}</h2>
      <div className="p-2 space-x-2">
        <button
          onClick={() => dispatch(descrement())}
          className="p-2 bg-black text-white rounded-sm "
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="p-2 bg-black text-white rounded-sm "
        >
          +
        </button>
        <button
          onClick={() => dispatch(incrementbyStep(3))}
          className="p-2 bg-black text-white rounded-sm "
        >
          ++
        </button>
        <button
          onClick={() => dispatch(incrementAsync(9))}
          className="p-2 bg-black text-white rounded-sm "
        >
          ++
        </button>
        <p>{count.status}</p>
      </div>
    </div>
  );
}
