import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="energy_group56", 
    version="0.0.1",
    author="Touloumbes",
    description="A CLI for Watterloo.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ntua/TL19-56/cli-client",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)