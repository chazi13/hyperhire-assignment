interface Props {
  name: string;
  position: string;
  experience: string;
}

export default function EmployeeProfile({ name, position, experience }: Props) {
  return (
    <div className="text-center">
      <h4 className="line-clamp-1 truncate text-lg">{name}</h4>
      <p className="text-sm text-primary">
        <span>{position}</span>
        <span>&middot;</span>
        <span>{experience}</span>
      </p>
    </div>
  );
}
