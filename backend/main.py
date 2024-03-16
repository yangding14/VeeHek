from flask import Flask, request, jsonify
from flask_cors import CORS
# from gpt2 import generator
# from stream_and_play import stream_and_play
from tts import tts
from gpt import gpt
from db import insert, find, update, findall, findmany
from bson import json_util, ObjectId
import json

app = Flask(__name__)

# Initialize CORS with your Flask app
CORS(app)

@app.route("/")
def home():
    return "Default"


# @app.route("/gpt", methods=["GET"])
# def getResponse():
#     return jsonify(generator())
    
     
# @app.route("/streamandplay/<string:text>", methods=["GET"])
# def playAudio(text):
#     return stream_and_play(text)

@app.route("/tts", methods=["POST"])
def playTTS():
    data = request.get_json()
    user_input = data['text']
    tts(user_input)
    return "Success"


@app.route("/gpt", methods=["POST"])
def runGPT():
    data = request.get_json()
    message = data['message']
    response = gpt(message)
    return jsonify(response)

@app.route("/db/login", methods=["POST"])
def authentication():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    temp = ""
    
    result1 = find("companies", {"companyEmail": email, "companyPassword": password})
    if result1 is not None:
        temp = "company"
    
    result2 = find("interviewees", {"workEmail": email, "password": password}) 
    if result2 is not None:
        temp = "interviewee"

    
    if temp == "company":
        return jsonify({"status": "success", "type": "company", "userId": str(result1['_id'])})
    elif temp == "interviewee":
        return jsonify({"status": "success", "type": "interviewee", "userId": str(result2['_id'])})
    else:
        return jsonify({"status": "failed", "type": "failed"})
    
 ####################################################################################################################   
 ####################################    INTERVIEWEE   #####################################################   
 ####################################################################################################################   
    
@app.route("/db/interviewee/register", methods=["POST"])
def registerInterviewee():
    data = request.get_json()
    firstName = data['firstName']
    lastName = data['lastName']
    workEmail = data['workEmail']
    phoneNumber = data['phoneNumber']
    password = data['password']
    cv = data['cv']
    return insert("interviewees", {
        "firstName": firstName,
        "lastName": lastName,
        "workEmail": workEmail,
        "phoneNumber": phoneNumber,
        "password": password,
        "cv": cv,
    })
    
@app.route("/db/interviewee/getuser", methods=["POST"])
def getuser_interviewee():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor = find("interviewees", {"_id": id})
    return json.loads(json_util.dumps(cursor))

 ####################################################################################################################   
 ####################################    COMPANY   #####################################################   
 ####################################################################################################################   
    
@app.route("/db/company/register", methods=["POST"])
def registerCompany():
    data = request.get_json()
    companyName = data['companyName']
    companyNumber = data['companyNumber']
    companyEmail = data['companyEmail']
    companyAddress = data['companyAddress']
    companyPassword = data['companyPassword']
    return insert("companies", {
        "companyName": companyName,
        "companyNumber": companyNumber,
        "companyEmail": companyEmail,
        "companyAddress": companyAddress,
        "companyPassword": companyPassword,
    })
    
@app.route("/db/company/getuser", methods=["POST"])
def getuser_company():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor = find("companies", {"_id": id})
    return json.loads(json_util.dumps(cursor))
    
 ####################################################################################################################   
 ####################################    JOBS   #####################################################   
 ####################################################################################################################   
    
@app.route("/db/jobs/add", methods=["POST"])
def addJob():
    data = request.get_json()
    roleName = data['roleName']
    location = data['location']
    deadline = data['deadline']
    estimatedSalary = data['estimatedSalary']
    description = data['description']
    employmentType = data['employmentType']
    jobType = data['jobType']
    selectedQuestions = data['selectedQuestions']
    companyId = data['companyId']
    suggestedQuestions = data['suggestedQuestions']
    return insert("jobs", {
        "companyId": ObjectId(companyId),
        "roleName": roleName,
        "location": location,
        "deadline": deadline,
        "estimatedSalary": estimatedSalary,
        "description": description,
        "employmentType": employmentType,
        "jobType": jobType,
        "selectedQuestions": selectedQuestions,
        "suggestedQuestions": suggestedQuestions
    })
    
@app.route("/db/jobs/find", methods=["POST"])
def findJob():
    data = request.get_json()
    id = ObjectId(data['_id'])
    jobs_cursor = find("jobs", {"_id": id})
    jobs_data = json.loads(json_util.dumps(jobs_cursor))
    
    company_cursor = find("companies", {"_id":  ObjectId(jobs_data["companyId"]["$oid"])})
    company_data = json.loads(json_util.dumps(company_cursor))
    jobs_data["companyInfo"] = company_data
    
    return jsonify(jobs_data)

@app.route("/db/jobs/findall", methods=["GET"])
def findall_jobs():
    jobs_cursor = findall("jobs")
    jobs_data = json.loads(json_util.dumps(jobs_cursor))
    
    # Fetch company information for each job
    for job in jobs_data:
        company_id = job["companyId"]["$oid"]
        if company_id:
            company_cursor = find("companies", {"_id": ObjectId(company_id)})
            company_data = json.loads(json_util.dumps(company_cursor))
            job["companyInfo"] = company_data

    return jsonify(jobs_data)

 ####################################################################################################################   
 ####################################    INTERVIEWS   #####################################################   
 ####################################################################################################################   
 
 #interview status: pending, accepted, rejected, submitted, hired, not hired
 
@app.route("/db/interviews/apply", methods=["POST"])
def apply():
    data = request.get_json()
    jobId = data['jobId']
    intervieweeId = data['intervieweeId']
    
    job_cursor = find("jobs", {"_id": ObjectId(jobId)})        
    job_data = json.loads(json_util.dumps(job_cursor))
    
    return insert("interviews", {
        "jobId": ObjectId(jobId),
        "intervieweeId": ObjectId(intervieweeId),
        "companyId" : ObjectId(job_data["companyId"]["$oid"]),
        "status": "pending",
        "date": "12/02/2023",
    })

@app.route("/db/interviews/accept", methods=["POST"])
def accept():
    data = request.get_json()
    id = ObjectId(data['_id'])
    update("interviews", {"_id": id}, {"$set": {"status": "accepted"}})
    return "Success"

@app.route("/db/interviews/reject", methods=["POST"])
def reject():
    data = request.get_json()
    id = ObjectId(data['_id'])
    update("interviews", {"_id": id}, {"$set": {"status": "rejected"}})
    return "Success"

@app.route("/db/interviews/submit", methods=["POST"])
def submit():
    data = request.get_json()
    id = ObjectId(data['_id'])
    score = data['score']
    summary = data['summary']
    conversation = data['conversation']
    update("interviews", {"_id": id}, {"$set": {"status": "submitted", "score": score, "summary": summary, "conversation": conversation}})
    return "Success"

@app.route("/db/interviews/hire", methods=["POST"])
def hire():
    data = request.get_json()
    id = ObjectId(data['_id'])
    update("interviews", {"_id": id}, {"$set": {"status": "hired"}})
    return "Success"

@app.route("/db/interviews/nothire", methods=["GET"])
def nothire():
    data = request.get_json()
    id = ObjectId(data['_id'])
    update("interviews", {"_id": id}, {"$set": {"status": "not hired"}})
    return "Success"

@app.route("/db/interviews/get/interview", methods=["POST"])
def getInterview():
    # get interview by interview id and return with company and job and interviewee info
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor = find("interviews", {"_id": id})
    interview_data = json.loads(json_util.dumps(cursor))
    
    company_id = interview_data["companyId"]["$oid"]
    job_id = interview_data["jobId"]["$oid"]
    interviewee_id = interview_data["intervieweeId"]["$oid"]
    
    if company_id:
        company_cursor = find("companies", {"_id": ObjectId(company_id)})
        company_data = json.loads(json_util.dumps(company_cursor))
        interview_data["companyInfo"] = company_data
    if job_id:
        job_cursor = find("jobs", {"_id": ObjectId(job_id)})
        job_data = json.loads(json_util.dumps(job_cursor))
        interview_data["jobInfo"] = job_data
    if interviewee_id:
        interviewee_cursor = find("interviewees", {"_id": ObjectId(interviewee_id)})
        interviewee_data = json.loads(json_util.dumps(interviewee_cursor))
        interview_data["intervieweeInfo"] = interviewee_data
        
    return jsonify(interview_data)    

@app.route("/db/interviews/get/applications", methods=["POST"])
def getApplications():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_job = findmany("interviews", {"jobId": id, "status": "pending"})
    jobs_data = json.loads(json_util.dumps(cursor_job))
    
    # Fetch company information for each job
    for job in jobs_data:
        company_id = job["companyId"]["$oid"]
        interviewee_id = job["intervieweeId"]["$oid"]
        if company_id:
            company_cursor = find("companies", {"_id": ObjectId(company_id)})
            company_data = json.loads(json_util.dumps(company_cursor))
            job["companyInfo"] = company_data
        if interviewee_id:
            interviewee_cursor = find("interviewees", {"_id": ObjectId(interviewee_id)})
            interviewee_data = json.loads(json_util.dumps(interviewee_cursor))
            job["intervieweeInfo"] = interviewee_data
        interview_cursor = find("interviews", {"jobId": ObjectId(id), "intervieweeId": ObjectId(interviewee_id), "companyId": ObjectId(company_id), "status": "pending"})
        interview_data = json.loads(json_util.dumps(interview_cursor))
        job["interviewInfo"] = interview_data
    
    return jobs_data

@app.route("/db/interviews/get/applied", methods=["POST"])
def getApplied():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_job = findmany("interviews", {"intervieweeId": id, "status": "pending"})
    jobs_data = json.loads(json_util.dumps(cursor_job))
    
    for job in jobs_data:
        company_id = job["companyId"]["$oid"]
        job_id = job["jobId"]["$oid"]
        if company_id:
            company_cursor = find("companies", {"_id": ObjectId(company_id)})
            company_data = json.loads(json_util.dumps(company_cursor))
            job["companyInfo"] = company_data
        if job_id:
            job_cursor = find("jobs", {"_id": ObjectId(job_id)})
            job_data = json.loads(json_util.dumps(job_cursor))
            job["jobInfo"] = job_data
    
    return jobs_data

@app.route("/db/interviews/get/accepted", methods=["POST"])
def getAccepted():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_job = findmany("interviews", {"intervieweeId": id, "status": "accepted"})
    jobs_data = json.loads(json_util.dumps(cursor_job))
    
    for job in jobs_data:
        company_id = job["companyId"]["$oid"]
        job_id = job["jobId"]["$oid"]
        if company_id:
            company_cursor = find("companies", {"_id": ObjectId(company_id)})
            company_data = json.loads(json_util.dumps(company_cursor))
            job["companyInfo"] = company_data
        if job_id:
            job_cursor = find("jobs", {"_id": ObjectId(job_id)})
            job_data = json.loads(json_util.dumps(job_cursor))
            job["jobInfo"] = job_data
    
    return jobs_data

@app.route("/db/interviews/get/results", methods=["POST"])
def getResults():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_job = findmany("interviews", {"intervieweeId": id, "status": {"$in": ["submitted", "hired", "not hired"]}})
    jobs_data = json.loads(json_util.dumps(cursor_job))
    
    for job in jobs_data:
        company_id = job["companyId"]["$oid"]
        job_id = job["jobId"]["$oid"]
        if company_id:
            company_cursor = find("companies", {"_id": ObjectId(company_id)})
            company_data = json.loads(json_util.dumps(company_cursor))
            job["companyInfo"] = company_data
        if job_id:
            job_cursor = find("jobs", {"_id": ObjectId(job_id)})
            job_data = json.loads(json_util.dumps(job_cursor))
            job["jobInfo"] = job_data
            
    return jobs_data

@app.route("/db/interviews/get/shortlisted", methods=["POST"])
def getShortlisted():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_interview = findmany("interviews", {"jobId": id, "status": {"$in":  ["accepted", "submitted"]}})
    interview_data = json.loads(json_util.dumps(cursor_interview))
    
    for interview in interview_data:
        interviewee_id = interview["intervieweeId"]["$oid"]
        if interviewee_id:
            interviewee_cursor = find("interviewees", {"_id": ObjectId(interviewee_id)})
            interviewee_data = json.loads(json_util.dumps(interviewee_cursor))
            interview["intervieweeInfo"] = interviewee_data
            
    return interview_data

@app.route("/db/interviews/get/hired", methods=["POST"])
def getHired():
    data = request.get_json()
    id = ObjectId(data['_id'])
    cursor_interview = findmany("interviews", {"jobId": id, "status": "hired"})
    interview_data = json.loads(json_util.dumps(cursor_interview))
    
    for interview in interview_data:
        interviewee_id = interview["intervieweeId"]["$oid"]
        if interviewee_id:
            interviewee_cursor = find("interviewees", {"_id": ObjectId(interviewee_id)})
            interviewee_data = json.loads(json_util.dumps(interviewee_cursor))
            interview["intervieweeInfo"] = interviewee_data
            
    return interview_data
    
if __name__ == "__main__":
    app.run(debug=True)
    
    