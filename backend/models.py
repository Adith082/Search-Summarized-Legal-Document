from pydantic import BaseModel, Field
from typing import Union


class Legal_document_request(BaseModel):
    query: str = Field(..., min_length=1,description="Search query cannot be empty")
    
class Legal_document_info(BaseModel):
    title: str
    summary: str
    
class Legal_document_response(BaseModel):
    result: Union[Legal_document_info, str]