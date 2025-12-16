import React from "react";
import Card from "./components/Card";

const App = () => {
    const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    save: "save",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    save: "bookmark saved",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    save: "save",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    save: "save",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    save: "bookmark saved",
    company: "Google",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    save: "save",
    company: "Microsoft",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    save: "save",
    company: "OpenAI",
    datePosted: "10 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    save: "bookmark saved",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    save: "save",
    company: "Spotify",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    save: "save",
    company: "Oracle",
    datePosted: "9 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bengaluru, India"
  }
];

  console.log("jobs array:", jobs);

  return (
    <div className="parent">
      {jobs.map((e, idx) => (
        <Card job={e} key={e.company + "-" + idx} />
      ))}
    </div>
  );
}; 

export default App;
