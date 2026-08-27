# Retrieval-Augmented Generation (RAG)
- the process of optimizing the output of a large language model, so it references an authoritative knowledge base outside of its training data sources before generating a response
- RAG extends the already powerful capabilities of LLMs to specific domains or an organization's internal knowledge base, all without the need to retrain the model.
- It is a cost-effective approach to improving LLM output so it remains relevant, accurate, and useful in various contexts.

> In simple language → RAG is a way to make an **LLM** generate better, more relevant answers by giving it information from data that we provide or retrieve, instead of relying only on what it learned during training. 

![Data Injection Pipeline](/docs/RAG/images/1.png)
- RAG augments the LLM with externally retrieved knowledge/context before it generates the output.
- eg : i want to create a chatbot which can answer user query like policies or some internal policy for workers and that data i want to make it private not public and it is constantly updated so in that case when i use a **LLM** then it would give answer based on it's training data not on based on my startup data and also we couldn't fine tune model because expensive process and every time data changes (policy changes ) we have to fine tune so this problem *RAG* solves 
because we gave context of data and prompt to llm on basis of that  it answer without needed training for it


## Workflow of Rag 
1. Data Injection Pipeline
> for Every Data we want that on basis of that our llm answers 
> we get that data and data is processed/extracted and then  convert into chunks (process is called **Data Parsing** ).Data could come from pdf,html ,sql etc
> After **Data Parsing** we Converts text into numerical vectors that represent semantic meaning(process is called **Embedding**) so we could apply techniques similarity searching consine laws and all.
> then that vector data is stored in Database called as ***Vector Database***
> and this whole pipeline is called 
**Data Injection Pipeline**
> after this we get our knowlege base

![Data Injection Pipeline](/docs/RAG/images/2.png)

2. Retrieval Pipeline
> in this pipeline basically the query from user is taken and also converted into vector (**Embeddings**) and
with this vectors and the data from vector database is compared by algorithums and then whole context and the prompt(basically means give the answer based on this database) is given to **LLM** and the **LLM** receives the retrieved context along with the user's query, allowing it to generate an answer using the provided information rather than relying only on its training knowledge. and this is whole flow of **Traditional Rag** or a basic ***RAG*** 

![Data Injection Pipeline](/docs/RAG/images/3.png)


## Basics Pipeline of RAG
![RAG work flow](/docs/RAG/images/4.png)