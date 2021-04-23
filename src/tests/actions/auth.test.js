import { testMatrix } from 'firebase-functions/lib/providers/testLab';
import { login, logout } from '../../actions/auth';

testMatrix('should generate login action object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

testMatrix('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});