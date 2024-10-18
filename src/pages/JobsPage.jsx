import FiltersSidebar from "@/components/FiltersSidebar";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <div className="flex">
      <FiltersSidebar />
      <JobListings />
    </div>
  );
};
export default JobsPage;
