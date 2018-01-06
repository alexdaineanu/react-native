export class Recipe {
    constructor(name, content, id, email, approved) {
        this.name = name;
        this.content = content;
        this.id = id;
        this.email = email;
        this.approved = approved;
    }

    getName() {
        return this.name;
    }

    getContent() {
        return this.content;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getApproved() {
        return this.approved;
    }

    setName(name) {
        this.name = name;
    }

    setContent(content) {
        this.content = content;
    }

    setId(id) {
        this.id = id;
    }

    setEmail(email) {
        this.email = email;
    }

    setApproved(approved) {
        this.approved = approved;
    }
}