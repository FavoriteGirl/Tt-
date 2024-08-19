export const PersonalInfo = (props) => {
  return (
    <div className="flex gap-10">
      <div>
        <p className="text-lg text-slate-600">
          Country :&nbsp;
          <span className="text-slate-950 font-semibold">{props.Country}</span>
        </p>
        <p className="text-lg text-slate-600">
          City :&nbsp;{" "}
          <span className="text-slate-950 font-semibold">{props.City}</span>
        </p>
      </div>
      <div>
        <p className="text-lg text-slate-600">
          Relationship Status :&nbsp;
          <span className="text-slate-950 font-semibold">
            {props.RelationShipStat}
          </span>
        </p>
        <p className="text-lg text-slate-600">
          Languages :&nbsp;
          {props.Languages.map((language, index) => {
            return (
              <span key={index} className="text-slate-950 font-semibold">
                {language}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
