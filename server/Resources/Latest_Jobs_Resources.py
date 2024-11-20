from flask_restful import Resource, reqparse
from Models.Latest_Jobs import Latest_Jobs

class LatestListResource(Resource):
    def get(self):
        latest_jobs = Latest_Jobs.get_all_latest_jobs()
        if not latest_jobs:
            return {"message":"No jobs found"}, 404
        return latest_jobs, 200 