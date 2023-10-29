import os
from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.document_loaders import TextLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI


if __name__ == "__main__":
    load_dotenv()
    llm = OpenAI(openai_api_key=os.environ.get("OPENAI_API_KEY"))
    template = "You are an helpful assitant that helps people in new magic shop, be polite and always talk with your clients. The client asked {question} and you know {information}"
    document = TextLoader("assistant/about.txt").load()
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    documents = text_splitter.split_documents(document)
    db = Chroma.from_documents(documents, OpenAIEmbeddings())

    query = "Can you tell me something about WizArt? Can you tell me a joke about wizart? My name is Howard. Say hi please!"
    docs = db.similarity_search(query)

    chat = PromptTemplate.from_template(template)
    chat = chat.format(question=query, information=docs[0].page_content)

    chatmodel = ChatOpenAI()
    print(chatmodel.predict(chat))
