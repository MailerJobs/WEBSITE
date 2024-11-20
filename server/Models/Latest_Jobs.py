import mysql.connector
from flask import current_app
from config import Config



def get_db_connection():
    connection = mysql.connector.connect(
        host=Config.MYSQL_HOST,
        user=Config.MYSQL_USER,
        password=Config.MYSQL_PASSWORD,
        database=Config.MYSQL_DATABASE
    )
    return connection

class Latest_Jobs:
    @staticmethod
    def get_all_latest_jobs():
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM latest_jobs")
        latest_jobs = cursor.fetchall()
        cursor.close()
        conn.close()
        return latest_jobs