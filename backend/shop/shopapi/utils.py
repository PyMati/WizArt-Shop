from datetime import date
import os


def saveActionToLogFile(method: str, message: str):
    try:
        with open(f"./shopapi/logs/{date.today()}-log.txt", "a") as logfile:
            logfile.write(
                f"{method}:{message}:{date.today().strftime('%H:%M:%S')}\n")
    except FileNotFoundError:
        new_file = open(f"./shopapi/logs/{date.today()}-log.txt", "w")
        new_file.write(
            f"File created:{date.today().strftime('%H:%M:%S')}\n{method}:{message}:{date.today().strftime('%H:%M:%S')}\n")
        new_file.close()
        print("File created and log was saved.")
