function AS_Form_cd121849ac4942c48a5d3a9aeeb152dd(eventobject) {
    var name = sante.current.user.FIRST_NAME + "" + sante.current.user.LAST_NAME;
    var email = sante.current.user.EMAIL;
    frmUserKA.lblHeader.text = name;
    frmUserKA.lblEmail.text = email;
}