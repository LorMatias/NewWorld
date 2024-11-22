import { Card } from "../ui/card";

type PartyMember = {
  role: string;
  class: string;
  heartrune: string;
  name: string;
};

type PartyListProps = {
  title: string;
  members: PartyMember[];
  roles: string[];
  classes: string[];
  heartrunes: string[];
  names: string[];
  onUpdateMember: (
    index: number,
    key: keyof PartyMember,
    value: string
  ) => void;
};

export const PartyList = ({
  title,
  members,
  roles,
  classes,
  heartrunes,
  names,
  onUpdateMember,
}: PartyListProps) => {
  return (
    <Card className="p-4 border bg-slate-200">
      <h3 className="text-center font-bold">{title}</h3>
      <div className="grid grid-cols-4 gap-2 mt-4 text-sm font-medium">
        <div>Role</div>
        <div>Class</div>
        <div>Heartrune</div>
        <div>Name</div>
      </div>
      <div>
        {members.map((member, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-2 items-center py-1 px-2 rounded ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {/* Role Selector */}
            <select
              className="border rounded px-2 py-1"
              value={member.role}
              onChange={(e) => onUpdateMember(index, "role", e.target.value)}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            {/* Class Selector */}
            <select
              className="border rounded px-2 py-1"
              value={member.class}
              onChange={(e) => onUpdateMember(index, "class", e.target.value)}
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>

            {/* Heartrune Selector */}
            <select
              className="border rounded px-2 py-1"
              value={member.heartrune}
              onChange={(e) =>
                onUpdateMember(index, "heartrune", e.target.value)
              }
            >
              <option value="">Select Heartrune</option>
              {heartrunes.map((hr) => (
                <option key={hr} value={hr}>
                  {hr}
                </option>
              ))}
            </select>

            {/* Name Selector */}
            <select
              className="border rounded px-2 py-1"
              value={member.name}
              onChange={(e) => onUpdateMember(index, "name", e.target.value)}
            >
              <option value="">Select Name</option>
              {names.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </Card>
  );
};
