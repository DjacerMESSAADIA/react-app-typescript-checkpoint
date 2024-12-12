interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="text-4xl font-bold text-indigo-600 p-6 text-center">
      Hello, {name}!
    </div>
  );
};

export default Greeting;
