import { useEffect, useState } from 'react';
import { FaUserFriends, FaFileAlt, FaTree } from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  endValue: number;
  label: string;
}

function StatItem({ icon, value, endValue, label }: StatItemProps) {
  return (
    <div>
      <div className="text-primary mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: <FaUserFriends className="text-3xl mx-auto" />, endValue: 352, label: "Clients Served" },
    { icon: <FaFileAlt className="text-3xl mx-auto" />, endValue: 1274, label: "Reports Created" },
    { icon: <FaTree className="text-3xl mx-auto" />, endValue: 684, label: "Carbon Offsets" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const intervalId = setInterval(() => {
      if (frame === totalFrames) {
        clearInterval(intervalId);
        setCounters(stats.map(stat => stat.endValue));
        return;
      }

      setCounters(prevCounters =>
        prevCounters.map((counter, index) => {
          const increment = stats[index].endValue / totalFrames;
          return Math.min(Math.floor(counter + increment), stats[index].endValue);
        })
      );

      frame++;
    }, frameDuration);
  };

  return (
    <section className="py-12 bg-gray-100" id="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={counters[index]}
              endValue={stat.endValue}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
