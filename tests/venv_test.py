"""Testing the virtual environment"""

import platform


def test_python_version():
    """Checking the python version"""
    major, minor = platform.python_version().split(".")[:2]
    pyversion = f"{major}.{minor}"
    assert float(pyversion) >= 3.10, "Incorrect python version"
