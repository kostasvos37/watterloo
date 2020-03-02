import os
global count

def test_basic_entrypoint():
    exit_status = os.system('energy_group56')
    assert exit_status == 0
    print("Basic test was OK!")

def test_login():
    exit_status = os.system('energy_group56 login')
    assert exit_status != 0
    print("Login test was OK!")

def main():
    test_basic_entrypoint()
    test_login()

if __name__ == '__main__':
    main()
    
