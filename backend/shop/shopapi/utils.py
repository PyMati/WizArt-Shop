from datetime import date
from django.utils import timezone
import os


def saveActionToLogFile(method: str, message: str):
    try:
        with open(f"./shopapi/logs/{date.today()}-log.txt", "a") as logfile:
            logfile.write(
                f"{method}:{message}:{timezone.now().strftime('%H:%M:%S')}\n")
    except FileNotFoundError:
        new_file = open(f"./shopapi/logs/{date.today()}-log.txt", "w")
        new_file.write(
            f"File created:{timezone.now().strftime('%H:%M:%S')}\n{method}:{message}:{timezone.now().strftime('%H:%M:%S')}\n")
        new_file.close()
        print("File created and log was saved.")
