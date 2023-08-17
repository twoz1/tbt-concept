const [email, setEmail] = useState('');
const [emailValid, setEmailValid] = useState(false);
const special = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

const handleEmail = (e) => {
    setEmail(e.target.value);

    if (special.test(email)) {
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
};

<tr>
    <th>
        이메일 아이디<span className="point_color">&#42;</span>
    </th>
    <td>
        <label>
            <input
                className="input_box"
                value={email}
                onChange={handleEmail}
                onKeyDown={(e) => {
                    if (!emailValid) {
                        if (e.key === 'Tab') {
                            e.preventDefault();
                            setEmail('');
                        }
                    }
                }}
                placeholder="&#64;까지 정확하게 입력해주세요."
                required
            />
        </label>
        <div>
            {0 < email.length && email.length < 5 && <span>아이디를 5자 이상으로 입력해주세요.</span>}

            {email.length >= 5 && !emailValid && <span>아이디는 이메일 형식으로 입력해주세요.</span>}
            {emailValid && <span>사용 가능한 아이디입니다.</span>}
        </div>
    </td>
</tr>;
const handlePw = (e) => {
    // console.log('첫번쩨');
    const newPw = e.target.value.slice(0, 16);

    if (newPw.length <= 7 || newPw.length > 16) {
        setPwMessage('8자~16자로 입력해주세요.;');
        setPwValid(false);
    } else if (!/[a-zA-Z]/.test(newPw) || !/\d/.test(newPw) || !special.test(newPw)) {
        setPwMessage('영문, 숫자, 특수문자를 모두 사용하여 입력하세요.');
        setPwValid(false);
    } else {
        setPwMessage('사용 가능합니다.');
        setPwValid(true);
    }
    setPw(newPw);
};

<tr>
    <th>
        비밀번호<span className="point_color">&#42;</span>
    </th>
    <td>
        <label>
            <input
                className="input_box"
                type="password"
                value={pW}
                onChange={handlePw}
                placeholder="영문&#43;숫자&#43;특수문자 조합 8&#126;16자리"
                onKeyDown={(e) => {
                    if (!pWValid) {
                        if (e.key === 'Tab') {
                            e.preventDefault();
                            setPw('');
                        }
                    }
                }}
                required
            />
        </label>
        <div>
            <span>{pwMessage}</span>
        </div>
    </td>
</tr>;
