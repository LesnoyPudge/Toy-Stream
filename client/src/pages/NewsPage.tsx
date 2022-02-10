


export const NewsPage = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="news__inner">
                    <div className="news__header">

                    </div>

                    <div className="news__content">
                        <form action="" className="form-name">
                            <div className="form-name__inner">
                                <div className="form-name__form-field form-field"
                                    onFocus={(e) => {
                                        e.target.closest('.form-field')?.classList.add('focus');
                                        e.target.closest('.form-field')?.classList.add('error')
                                        e.target.closest('.form-field')?.classList.add('validated')
                                    }}
                                    onBlur={(e) => {
                                        e.target.closest('.form-field')?.classList.remove('focus');
                                        e.target.closest('.form-field')?.classList.remove('error')
                                        e.target.closest('.form-field')?.classList.remove('validated')
                                    }}
                                >
                                    <label className="form-field__label">
                                        <span className="form-field__label-text">
                                            label1
                                        </span>

                                        <input className="form-field__input" type="text" placeholder="qwe"/>

                                        <div className="form-field__separator"/>
                                        
                                        <span className="form-field__error-message">
                                            Error
                                        </span>
                                    </label>
                                </div>

                                <div className="form-name__row">
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}