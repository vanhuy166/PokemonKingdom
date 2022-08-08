import React from "react";
import "./Description.scss";

interface Iprops {
  heightpok: number,
  weightpok: number,
  pokstat1: string,
  pokstat2: string,
  pokstat3: string,
  pokstat4: string,
  pokstat5: string,
  pokstat6: string,
  posbs1: number,
  posbs2: number,
  posbs3: number,
  posbs4: number,
  posbs5: number,
  posbs6: number,
}

const Description = ({
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}: Iprops) => {
  return (
    <div className="desc">
      <p>
        <b>Height</b> is <b>{heightpok * 10} cm.</b>
      </p>
      <p>
        <b>Weight</b> is <b>{weightpok * 0.1} kg</b>
      </p>
      <h3>Stat</h3>
      <p>
        <b>
          {pokstat1} : {posbs1}
        </b>
      </p>
      <p>
        <b>
          {pokstat2} : {posbs2}
        </b>
      </p>
      <p>
        <b>
          {pokstat3} : {posbs3}
        </b>
      </p>
      <p>
        <b>
          {pokstat4} : {posbs4}
        </b>
      </p>
      <p>
        <b>
          {pokstat5} : {posbs5}
        </b>
      </p>
      <p>
        <b>
          {pokstat6} : {posbs6}
        </b>
      </p>
    </div>
  );
};

export default Description;
