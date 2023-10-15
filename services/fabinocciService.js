module.exports = {
    //making function for fabinocci series
    fabinocciSeries: async (body) => {
        try {
            var value1 = 0; var value2 = 1;
            var nextterm = 0;

            for (var i = 1; i <= body.input; i++) {



                nextterm = value1 + value2;
                value1 = value2;
                value2 = nextterm;


            }
            return nextterm;

        } catch (error) {
            return error;
        }
    }
}