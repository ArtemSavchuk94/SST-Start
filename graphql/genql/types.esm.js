export default {
    "scalars": [
        1,
        2,
        6
    ],
    "types": {
        "Article": {
            "comments": [
                3
            ],
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Comment": {
            "id": [
                2
            ],
            "text": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "addComment": [
                3,
                {
                    "articleID": [
                        2,
                        "String!"
                    ],
                    "text": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "articles": [
                0
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}