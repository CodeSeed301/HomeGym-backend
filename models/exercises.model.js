class ExerciseModel {
    constructor(obj) {
        this.name = obj.name;
        this.desc = obj.description.replace(/<[^>]*>/g, "");
        this.image_url=obj.image_url;
    }
}
module.exports = ExerciseModel;