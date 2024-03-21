import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import Filter from "@/components/shared/search/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";

// const questions = [
//   {
//     _id: "1",
//     title: "What is the best way to learn React?",
//     tags: [
//       { _id: "1", name: "python" },
//       { _id: "2", name: "javascript" },
//     ],
//     author: {
//       _id: "1",
//       name: "Vipul Maheshwari",
//       picture: "url_to_picture",
//     },
//     upvotes: 100000,
//     views: 50000000,
//     answers: [{}, {}], // Assuming we have two empty answer objects
//     createdAt: new Date("2024-02-10T12:00:00Z"),
//   },
//   {
//     _id: "2",
//     title: "How to learn Web development in 2024 LPU?",
//     tags: [
//       { _id: "1", name: "css" },
//       { _id: "2", name: "web" },
//     ],
//     author: {
//       _id: "1",
//       name: "Vipul Maheshwari",
//       picture: "url_to_picture",
//     },
//     upvotes: 10,
//     views: 100,
//     answers: [{}, {}], // Assuming we have two empty answer objects
//     createdAt: new Date("2021-10-10T12:00:00Z"),
//   },
// ];

export default async function Home() {
  const result = await getQuestions({});
  console.log(result.questions);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Looping through questions */}
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              createdAt={question.createdAt}
              views={question.views}
            />
          ))
        ) : (
          <NoResult
            title="There are no questions to show."
            description="Let's break the silence! ask a question and help the community know
        each other better. Get involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
