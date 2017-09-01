function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function node(id, ip_address) {
    return {
        "result": {
            "id": id,
            "gpu": {
                "name": "GPU ID #" + id,
                "model": "NVIDIA GTX" + id * 11
            },
            "network": {
                "ip_address": ip_address
            }
        }
    };
}

var nodes = [];

function add_node() {
    var input = $('#new_node_address');

    //if(input.validity.patternMismatch){
        var ip_address = input.val();
        var new_node = node(nodes.length, ip_address);

        nodes.push(new_node);
        update_node_list(new_node);
    //}
}

function update_node_list(new_node) {
    var node_list = $('#node-list');

    node_list.append(`<li>
                        <label for="node[${new_node.result.id}]" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                            <input type="checkbox" id="node[${new_node.result.id}]" class="mdl-checkbox__input">
                            <span class="mdl-checkbox__label">${new_node.result.network.ip_address}, ${new_node.result.gpu.model}</span>
                        </label>
                    </li>`);
}