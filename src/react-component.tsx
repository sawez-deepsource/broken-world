// React component - should work even with broken extends
const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  var expanded = false; // no-var

  if (title == "") { // eqeqeq
    return null;
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
      <img src="icon.png" />
    </div>
  );
};

export default Card;
