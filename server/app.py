from flask import Flask
from flask_restful import Api, Resource
from Resources.Latest_Jobs_Resources import LatestListResource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)



api.add_resource(LatestListResource, '/latest_jobs')




if __name__ == '__main__':
    app.run(debug=True)