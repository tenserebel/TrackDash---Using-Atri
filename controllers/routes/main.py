from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

def strike(text):
    result = ''
    for c in text:
        result = result + c + '\u0336'
    return result

def init_state(at: Atri):
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Button2.onClick:
        at.TextBox10.custom.text = "Tasks:"
        if at.Radio1.custom.label == " ":
            at.Radio1.custom.label = at.Input2.custom.value
            at.Radio1.custom.radius = 14
        elif at.Radio2.custom.label == " ":
            at.Radio2.custom.label = at.Input2.custom.value
            at.Radio2.custom.radius = 14
        elif at.Radio3.custom.label == " ":
            at.Radio3.custom.label = at.Input2.custom.value
            at.Radio3.custom.radius = 14
        elif at.Radio4.custom.label == " ":
            at.Radio4.custom.label = at.Input2.custom.value
            at.Radio4.custom.radius = 14
        elif at.Radio5.custom.label == " ":
            at.Radio5.custom.label = at.Input2.custom.value
            at.Radio5.custom.radius = 14

    if at.Radio1.custom.checked:
        at.Radio1.custom.label = strike(at.Radio1.custom.label)

    if at.Radio2.custom.checked:
        at.Radio2.custom.label = strike(at.Radio2.custom.label)

    if at.Radio3.custom.checked:
        at.Radio3.custom.label = strike(at.Radio3.custom.label)

    if at.Radio4.custom.checked:
        at.Radio4.custom.label = strike(at.Radio4.custom.label)
    
    if at.Radio5.custom.checked:
        at.Radio5.custom.label = strike(at.Radio5.custom.label)

    if at.Button4.onClick:
        at.Radio1.custom.label = " "
        at.Radio1.custom.radius = 0
        at.Radio1.custom.checked=False
        at.Radio2.custom.label = " "
        at.Radio2.custom.radius = 0 
        at.Radio2.custom.checked=False
        at.Radio3.custom.label = " "
        at.Radio3.custom.radius = 0 
        at.Radio3.custom.checked=False
        at.Radio4.custom.label = " "
        at.Radio4.custom.radius = 0
        at.Radio4.custom.checked=False
        at.Radio5.custom.label = " "
        at.Radio5.custom.radius = 0
        at.Radio5.custom.checked=False
