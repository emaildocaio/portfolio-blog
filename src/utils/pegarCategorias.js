const pegarCategorias = (configurarState) => {
    const _listaCategorias =[
        {
            'id': 1,
            'descricao': '#praias'
        },
        {
            'id': 2,
            'descricao': '#montanhas'
        },
        {
            'id': 3,
            'descricao': '#cidades'
        },
        {
            'id': 4,
            'descricao': '#cachoeiras'
        },
        {
            'id': 5,
            'descricao': '#floresta'
        }
    ];

    _listaCategorias.sort((a, b) => {
        return (a.descricao > b.descricao) ? 1 : -1;
    } )
    

  configurarState(_listaCategorias);
};


export default pegarCategorias