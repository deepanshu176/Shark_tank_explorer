import { useParams } from "react-router-dom";
import { sharks } from "@/data/sharks";
import { startups } from "@/data/startups";
import StartupCard from "@/components/StartupCard";

const SharkDetails = () => {
  const { id } = useParams();

  const shark = sharks.find((s) => s.id === id);

  const sharkDeals = startups.filter((s) =>
    s.sharks?.some(
      (name) => name.toLowerCase().replace(/\s+/g, "-") === id
    )
  );

  if (!shark) {
    return <div className="p-10 text-white">Shark not found</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto text-white space-y-10">

      {/* 🔝 Shark Profile */}
      <div className="flex flex-col md:flex-row gap-6 items-center glass-card p-6 rounded-xl">
        <img
          src={shark.image}
          alt={shark.name}
          className="w-36 h-36 rounded-full object-cover border"
        />

        <div>
          <h1 className="text-3xl font-bold">{shark.name}</h1>
          <p className="text-primary">{shark.company}</p>
          <p className="mt-2 text-muted-foreground">{shark.bio}</p>
          <p className="mt-2 font-semibold">
            Total Deals: {sharkDeals.length}
          </p>
        </div>
      </div>

      {/* 🔽 Deals List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Deals by {shark.name}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharkDeals.map((s, i) => (
            <StartupCard key={s.id} startup={s} index={i} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SharkDetails;
