class ExerciseModel {
    constructor(obj) {
        this.name = obj.name;
        this.desc = obj.description.replace(/<[^>]*>/g, "");
    }
}
module.exports = ExerciseModel;