const Card = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;