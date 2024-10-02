function filter_list(l) {
    return l.filter((item) => {
       return typeof item === 'number'
     })}