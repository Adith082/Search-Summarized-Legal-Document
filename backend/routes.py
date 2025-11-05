from fastapi import APIRouter
from models import Legal_document_request, Legal_document_response, Legal_document_info
from mock_db import MOCK_DOCUMENTS

router = APIRouter()

@router.post("/generate", response_model=Legal_document_response)
def generate_legal_document_summary(request: Legal_document_request):
    
    query = request.query.lower()
    
    for document in MOCK_DOCUMENTS:
        if query == document["title"].lower():
            return Legal_document_response(result=Legal_document_info(title=document["title"], summary=document["summary"])) # using **document would also work
    
    return Legal_document_response(result="Legal document not found.")


@router.get("/")
def initial_endpoint():
    return {"report": "server is running successfully"}