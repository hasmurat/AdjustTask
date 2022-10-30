/// <reference types='cypress' />

export default class PetsRequestBodies {

    generalPetBody(petID, categoryID, categoryName, petName, status) {
        return {
            "id": petID,
            "category": {
                "id": categoryID,
                "name": categoryName
            },
            "name": petName,
            "photoUrls": [
                ""
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": status
        }
    }

}

