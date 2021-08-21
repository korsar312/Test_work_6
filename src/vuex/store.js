import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            figure:{
                cube:{
                    top: 40,
                    left: 60,
                    height:400,
                    width: 400
                },
                cube2:{
                    top: 40,
                    left: 60,
                    height:400,
                    width: 400
                },
            },

            card:{
                height: 1000,
                width: 1000
            },
            coord: null,
        }
    },
    mutations: {
        changeSize(state, over){
            switch (over.side) {
                case 'right':
                    if ( (over.obj.width - over.shift + over.obj.left) > state.card.width ){
                        over.obj.width = state.card.width - over.obj.left
                        return;
                    }
                    else if( (over.obj.width - over.shift) < 0){
                        over.obj.width = 0
                        return;
                    }
                    over.obj.width -= over.shift
                    break
                case 'bot':
                    if ( (over.obj.height - over.shift + over.obj.top) > state.card.height ){
                        over.obj.height = state.card.height - over.obj.top
                        return;
                    }
                    else if( (over.obj.height - over.shift) < 0){
                        over.obj.height = 0
                        return;
                    }
                    over.obj.height -= over.shift
                    break
                case 'left':
                    if (over.obj[over.side] - over.shift < 0){
                        over.obj[over.side] = 0
                        return
                    }
                    else if( (over.obj.width) < 0){
                        over.obj.width = 1
                        return;
                    }
                    else{
                        console.log(over.obj.width - over.shift)
                        over.obj.width += over.shift
                        over.obj[over.side] -= over.shift
                    }
                    break
                case 'top':
                    if (over.obj[over.side] - over.shift < 0){
                        over.obj[over.side] = 0
                        return
                    }
                    else if( (over.obj.height) < 0){
                        over.obj.height = 0
                        return;
                    }
                    else{
                        over.obj.height += over.shift
                        over.obj[over.side] -= over.shift
                    }
                    break
                case 'center':
                    if( +over.obj.height + (over.obj.top - (state.coord[1] - over.newCoord[1])) > state.card.height ){
                        over.obj.top = state.card.height - over.obj.height
                    }
                    else if( over.obj.top - (state.coord[1] - over.newCoord[1]) < 0 ){
                        over.obj.top = 0
                    }
                    else {
                        over.obj.top = over.obj.top - (state.coord[1] - over.newCoord[1])
                        state.coord[1] = over.newCoord[1]
                    }


                    if( +over.obj.width + (over.obj.left - (state.coord[0] - over.newCoord[0])) > state.card.width ){
                        over.obj.left = state.card.width - over.obj.width
                    }
                    else if( over.obj.left - (state.coord[0] - over.newCoord[0]) < 0 ){
                        over.obj.left = 0
                    }
                    else {
                        over.obj.left = over.obj.left - (state.coord[0] - over.newCoord[0])
                        state.coord[0] = over.newCoord[0]
                    }
                    return;
            }

            state.coord = over.newCoord
        },
        changePos(state, over){
            switch (over.side) {
                case 'top':
                    if( +over.obj.height + +over.shift > state.card.height ){
                        over.obj[over.side] = state.card.height - over.obj.height
                        return
                    }
                    break
                case 'left':
                    if( +over.obj.width + +over.shift > state.card.width ){
                        over.obj[over.side] = state.card.width - over.obj.width
                        return
                    }
                    break
                case 'height':
                    if( +over.obj.top + +over.shift > state.card.height ){
                        over.obj[over.side] = state.card.height - over.obj.top
                        return
                    }
                    break
                case 'width':
                    if( +over.obj.left + +over.shift > state.card.width ){
                        over.obj[over.side] = state.card.width - over.obj.left
                        return
                    }
                    break
            }
            over.obj[over.side] = over.shift
        },
    },
    actions: {

    },
    getters:{

    },
})

export default store
