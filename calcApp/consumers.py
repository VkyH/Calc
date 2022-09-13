from channels.generic.websocket import WebsocketConsumer
import json
class CalcConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        
    def disconnect(self,close_code):
        self.close()
        
    def receive(self,text_data):
        data=json.loads(text_data)
        expr=data['expression']
        try:
            result=eval(expr)
        except:
            result="Invalid expression"
        
        self.send(text_data=json.dumps({
            "result":result
        }))
        
        