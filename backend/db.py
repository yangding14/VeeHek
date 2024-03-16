import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId
import os
from dotenv import load_dotenv
from flask import jsonify

load_dotenv()
MONGODB_URI = os.getenv('MONGODB_URI')
client = MongoClient(MONGODB_URI)

db = client["test"]

def insert(collection, body):
    collection = db[collection]
    # body = {
    #     "name": body.get("name", "DefaultName"),
    #     "age": body.get("age", 0),
    #     "email": body.get("email", "DefaultEmail"),
    # }
    collection.insert_one(body)
    return "Success"

def find(collection, criteria):
    collection = db[collection]
    return collection.find_one(criteria)

def findall(collection):
    collection = db[collection]
    return collection.find()

def findmany(collection, criteria):
    collection = db[collection]
    return collection.find(criteria)

def update(collection, criteria, body):
    collection = db[collection]
    return collection.update_one(criteria, body)

def test():
    collection = "companies"
    body = {
        "companyEmail": "a",
        "companyPassword": "a",
    }
    result = find(collection, body)
    
    print(result)

    # if result is not None:
    #     print("Document found:", result)
    # else:
    #     print("No document found with the specified criteria.")
    
test()