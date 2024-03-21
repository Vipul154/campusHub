"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    // connect to Database
    connectToDatabase();

    // Now we can create document instances based off these models, specifically to create the quesion model.
    const { title, content, tags, author, path } = params;
    // create the question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // create the tags or get them if they already exist. Each tag is going to be a document in the database as well.
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      // This is a special mongoose property that is going to allow us a lot of things : 1. To find something. 2. To do something on it. 3. Additional Options.

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
    // we are just pushing the tag that we add to this document into the questoin. so kinda making a relation with them.

    // create an interaction record for the user's ask_question action

    // then increment the author reputation by +5 points for creating a question.

    // So our task is to now create-a-questoin, connect it to author and then revalidate the path of question.
    // Now we now have to mark the user in the database.
  } catch (error) {}
}
