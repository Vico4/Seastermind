import Ball from './ball'

function Select() {
    return(
        <div className='select-container'>
            <Ball color="baudroie" type="selector"/>
            <Ball color="mante" type="selector"/>
            <Ball color="dragon" type="selector"/>
            <Ball color="blob" type="selector"/>
        </div>
    )
}

export default Select