import "./New.scss";
import "https://kit.fontawesome.com/413f70ac23.js";

const New = () => {
  return (
    <>
       <head>
       <script src="https://kit.fontawesome.com/413f70ac23.js" crossOrigin="anonymous"></script>
       </head>
       <main id="containerBaseNew">
        <form id="recieve">
            
            <div id="form_header">
                <h1>RECEITA</h1>
            </div>

        

          
            <div id="inputs">
                
                <div className="input-box">
                    <label htmlFor="money">
                        <div className="input-field">
                          <i className="fa-solid fa-calculator"></i>
                            <input type="text" id="money" name="money" placeholder="R$ 00,00"/>
                        </div>
                    </label>
                </div>
                
                
                <div className="input-box">
                    <label htmlFor="recebido">
                        <div className="input-field">
                        <i className="fa-solid fa-circle-half-stroke"></i>
                            
                            <input type="text" id="recebido" name="recebido" placeholder="Recebido"/>
                        </div>
                    </label>
                </div>
                
              
                <div className="input-box">
                    <label htmlFor="date">
                        <div className="input-field">
                        <i className="fa-solid fa-calendar-days"></i>
                            
                            <input type="date" id="date" name="date" placeholder="Data"/>
                        </div>
                    </label>
                </div>

                <div className="input-box">
                    <label htmlFor="description">
                        <div className="input-field">
                            <i className="fa-solid fa-pencil"></i>
                            
                            <input type="text" id="description" name="description" placeholder="Descrição"/>
                        </div>
                    </label>
                </div>

                <div className="input-box">
                    <label htmlFor="categorie">
                        <div className="input-field">
                        <i className="fa-solid fa-tag"></i>
                            
                            <input type="text" id="categorie" name="categorie" placeholder="Categoria"/>
                        </div>
                    </label>
                </div>

                <div className="input-box">
                    <label htmlFor="account">
                        <div className="input-field">
                        <i className="fa-solid fa-credit-card"></i>
                            
                            <input type="text" id="account" name="account" placeholder="Conta"/>
                        </div>
                    </label>
                </div>

            </div>

            
            <button type="submit" id="save_button">
                Salvar
            </button>
        </form>
    </main>
    </>
  );
};

export default New;
